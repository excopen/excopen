package excopen.backend.controllers;

import excopen.backend.dto.LocationResponseDTO;
import excopen.backend.entities.Location;
import excopen.backend.iservices.ILocationService;
import excopen.backend.mapper.LocationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/locations")
public class LocationController {

    private final ILocationService locationService;
    private final LocationMapper locationMapper;

    @Autowired
    public LocationController(ILocationService locationService, LocationMapper locationMapper) {
        this.locationService = locationService;
        this.locationMapper = locationMapper;
    }

    @GetMapping
    public List<LocationResponseDTO> getAllLocationsWithTourCount() {
        List<Location> locations = locationService.getAllLocations();

        return locations.stream()
                .map(location -> {
                    LocationResponseDTO dto = locationMapper.toResponseDTO(location);
                    dto.setTourCount((long) location.getTours().size());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LocationResponseDTO> getLocationById(@PathVariable Long id) {
        Location loc = locationService.getLocationById(id);

        LocationResponseDTO dto = locationMapper.toResponseDTO(loc);
        dto.setTourCount((long) loc.getTours().size());

        return ResponseEntity.ok(dto);
    }
}

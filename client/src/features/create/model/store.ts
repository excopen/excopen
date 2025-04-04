import {BaseStore} from "@/shared/lib";
import {ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";

import {ContactsStore} from "./ContactsStore.ts";
import {DescriptionStore} from "./DescriptionStore.ts";
import {PriceStore} from "./PriceStore.ts";
import {CoordinatesStore} from "./CoordinatesStore.ts";
import {TagsStore} from "./TagsStore.ts";
import {ImagesStore} from "./ImagesStore.ts";
import {LocationStore} from "./LocationStore.ts";
import {TimeStore} from "./TimeStore.ts";
import {ParamsStore} from "./ParamsStore.ts";
import {SelectOptionsStore} from "@/features/create/model/SelectOptionsStore.ts";

class CreateTourStore extends BaseStore {

    contacts = new ContactsStore()
    description = new DescriptionStore()
    price = new PriceStore()
    coordinates = new CoordinatesStore()
    tags = new TagsStore()
    images = new ImagesStore()
    location = new LocationStore()
    time = new TimeStore()
    params = new ParamsStore()
    selectOptions = new SelectOptionsStore()

    constructor() {
        super();
    }

    get tour(): ITour {
        return {
            id: Date.now(),
            title: this.params.title,
            description: this.description,
            images: this.images.images,
            coordinates: this.coordinates.coordinates,
            tags: this.tags.tags,
            location: this.location.location,
            routeLength: this.location.routeLength,
            byCity: this.location.byCity,
            price: this.price.price,
            priceForPerson: this.price.priceForPerson,
            groupCapacity: this.params.groupCapacity,
            formatBehavior: this.selectOptions.formatBehavior as TourFormatBehavior,
            format: this.selectOptions.format as TourFormat,
            accessibility: this.selectOptions.accessibility as TourAccessibility,
            contacts: this.contacts,
            date: this.time.date,
            duration: this.time.duration,
            contributorId: this.params.contributorId,
            rating: 0,
            ratingCount: 0,
        }
    }

    get isDisabled(): boolean {
        return [
            this.params,
            this.description,
            this.time,
            this.images,
            this.tags,
            this.price,
            this.location,
            this.coordinates,
        ].every(store => store.isDisabled)
    }

}

export const createTourStore = new CreateTourStore()
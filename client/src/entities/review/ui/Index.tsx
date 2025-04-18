import {FC, useState} from "react";
import {Card} from "./card";
import {Header} from "./header";
import {Pagination} from "./pagination";
import {useReviewsByTourId} from "@/entities";

type ReviewListProps = {
    tourId: number
    rating: number
    ratingCount: number
}

export const Index: FC<ReviewListProps> = ({rating, ratingCount, tourId}) => {

    const {data: reviews, isLoading} = useReviewsByTourId(tourId)

    const [visibleReviews, setVisibleReviews] = useState<number>(
        2
    )

    return (
        <div className={"flex flex-col gap-8 my-4"}>
            <Header
                rating={rating}
                ratingCount={ratingCount}
            />
            {
                isLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    <div className={"flex flex-col gap-4"}>
                        {reviews.slice(0, visibleReviews).map(review =>
                            <Card
                                key={review.id}
                                name={review.name}
                                rating={review.rating}
                                positiveText={review.positiveText}
                                negativeText={review.negativeText}
                                withChildren={review.withChildren}
                                personCount={review.personCount}
                            />
                        )}
                        <Pagination
                            visibleReviews={visibleReviews}
                            setVisibleReviews={setVisibleReviews}
                            reviews={reviews}
                        />
                    </div>
                )
            }
        </div>
    );
};
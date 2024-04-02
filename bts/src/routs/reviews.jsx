import '../styles/Review.css';
import img1 from '../images/review_person_1.png';
import img2 from '../images/review_person_2.png';
import img3 from '../images/review_person_3.png';
import bg_img from '../images/reviews_page_bg.png'


export default function Reviews() {
    const reviews = [ // should be imported from somewhere
        {
            id: 1,
            text: 'Impressive Results! This billboard advertising company delivered exceptional results, increasing our brand visibility significantly. Highly recommended!',
            reviewerImg: img1,
            reviewerName: "Peter Parker",
            reviewerCompany: "Celine",
        },
        {
            id: 2,
            text: "Top-Notch Performance! This billboard advertising company surpassed all expectations, delivering outstanding results in record time. Definitely our first choice for future campaigns!",
            reviewerImg: img2,
            reviewerName: "Peter Parker",
            reviewerCompany: "Celine",
        },
        {
            id: 3,
            text: "Outstanding Service! We were thoroughly impressed with the professionalism and quality of work provided by this billboard advertising company. They exceeded our expectations!",
            reviewerImg: img3,
            reviewerName: "Peter Parker",
            reviewerCompany: "Celine",
        },
    ];
    return (
      <div className="flex flex-col gap-2">
        <header className='review-header'>
            <div className="miniheader">
                <h1 className="review-title">Reviews</h1>
            </div>
        </header>
        <main>
            <div className="reviews-container" style={{backgroundImage: `url(${bg_img})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                }}>
                {reviews.map(review => (
                    <div className="review-box">
                        <div className="description-container">
                            <p className="description">"{review.text}"</p>
                        </div>
                        <div className="image-container">
                            <img src={review.reviewerImg} alt="None" className='image'/>
                        </div>
                        <div className="name-container">
                            <p className="reviewer-name">
                                {review.reviewerName}, {review.reviewerCompany}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
      </div>
    )
}

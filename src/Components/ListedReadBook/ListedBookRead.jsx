

export default function ListedBookRead({ book }) {
    const { image, bookId: currentBookId, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row border mt-4 rounded-lg shadow-md">
                    <img
                        src={image}
                        className=" h-52 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

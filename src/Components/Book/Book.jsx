import { Link } from "react-router-dom";


export default function Book({ book }) {
    const {bookId, image, bookName, author, tags, category,  } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card shadow-xl p-4 border rounded-md">
                <figure className="bg-slate-100 py-4 rounded-md">
                    <img className=" h-[166px]"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body space-y-1">
                    <div className="flex gap-4">
                        {
                            tags.map((tag,index) => <button key={index} className=" bg-slate-100 px-4 py-2 rounded-full text-[#23BE0A] font-semibold">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-xl font-bold">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-xl font-semibold">By: {author}</p>
                    <div className="border-t-2 border-dashed "></div>
                    <div className="card-actions justify-between">
                        <div className="border rounded-full py-1 px-4">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

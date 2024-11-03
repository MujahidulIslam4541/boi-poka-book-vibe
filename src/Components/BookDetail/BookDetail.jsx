import { useLoaderData, useParams } from "react-router-dom"
import { addToStoredReadList } from "../../markasread/Markasread"
import { addToWishList } from "../addToWishList/addTowishList"


export default function BookDetail() {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()


    const book = data.find(book => book.bookId == id)
    const { image, bookId: currentBookId, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    console.log(book)

    const handleMarkAsReadList = (id) => {

        addToStoredReadList(id)
    }

    const addToWisList = (id) => {
        addToWishList(id)
    }

    
    return (
        <div className="my-10">
            <section className="flex flex-col md:flex-row gap-16 ">

                <div className="bg-slate-100 py-5 w-full md:w-1/2 flex justify-center items-center">
                    <img className="w-72" src={image} alt="" />
                </div>
                <div className="w-full md:w-1/2 space-y-2">
                    <h2 className="text-4xl font-bold ">{bookName}</h2>
                    <p className="text-xl font-semibold">By: {author}</p>
                    <hr />
                    <p className="text-xl font-semibold">{category}</p>
                    <hr />
                    <p>Review: {review}</p>

                    <div className="flex gap-4">
                        {
                            tags.map((tag, index) => <button key={index} className=" bg-slate-100 px-4 py-2 rounded-full text-[#23BE0A] font-semibold">{tag}</button>)
                        }
                    </div>
                    <hr />
                    <p className="text-gray-400">Number Of Pages: <span className="text-black text-xl font-semibold">{totalPages}</span></p>
                    <p>Publisher: {publisher}</p>
                    <p>Year Of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div className="gap-4 flex">
                        <button onClick={() => handleMarkAsReadList(bookId)} className="px-4 py-2 border rounded-md text-[#23BE0A]"> Mark As Read</button>
                        <button onClick={()=>addToWisList(bookId)} className="px-4 py-2 border rounded-md bg-[#23BE0A] text-[#fff]">Add to Wish List</button>
                    </div>
                </div>



            </section>

        </div>
    )
}

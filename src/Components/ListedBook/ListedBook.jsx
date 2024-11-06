import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getTheMarkAsRead } from '../../markasread/Markasread';
import Book from '../Book/Book';
import ListedBookRead from '../ListedReadBook/ListedBookRead';
// import { getAddToWishList } from '../addToWishList/addTowishList';

export default function ListedBook() {
    const [readList, setReadList] = useState([]);
    const allBooksData = useLoaderData();

    const [short, setShort] = useState('')

    const handleShort = shortType => {
        setShort(shortType)

        if (shortType === 'Number of pages') {
            const shortedReadList = [...readList].short((a, b) => a.totalPages - b.totalPages);
            setReadList(shortedReadList)
        }
    }



    useEffect(() => {
        const loadMarkAsRead = getTheMarkAsRead()
        // const loadWishList=getAddToWishList()
        const MarkAsReadToNumber = loadMarkAsRead.map(id => parseInt(id))
        console.log(loadMarkAsRead, MarkAsReadToNumber, allBooksData)

        // 
        const ReadBooksList = allBooksData.filter(book => MarkAsReadToNumber.includes(book.bookId))

        setReadList(ReadBooksList)
    }
        , [])
    return (
        <div>
            <h2 className="text-3xl my-8">Listed Book</h2>


            <div className='flex justify-center'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                        {
                            short ? `Short By :${short}` : 'short By'
                        }
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => { handleShort('Rating') }}><a>Ratings</a></li>
                        <li onClick={() => { handleShort('Number of pages') }}><a>number of pages</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Books:{readList.length}</h2>
                    {
                        readList.map(book => <ListedBookRead key={book.bookId} book={book}></ListedBookRead>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

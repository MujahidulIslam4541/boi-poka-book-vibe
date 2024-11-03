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

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Books:{readList.length}</h2>
                    {
                        readList.map(book=><ListedBookRead key={book.bookId} book={book}></ListedBookRead>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

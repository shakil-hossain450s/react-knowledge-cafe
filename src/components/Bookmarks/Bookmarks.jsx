import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from "../ReadingTime/ReadingTime";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <ReadingTime readingTime={readingTime}></ReadingTime>
            <div className="bg-[#1111110D] p-7 rounded-lg">
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                <div className="mt-4">
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark
                            key={idx}
                            bookmark={bookmark}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-[#1111110D] p-7 rounded-lg">
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                <div className="mt-4">
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;
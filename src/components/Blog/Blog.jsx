import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className=''>
            <div className='mb-4 lg:mb-8 border rounded'>
                <img className='rounded w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between md:items-center'>
                <div className='flex items-center gap-3 md:gap-4'>
                    <img className='w-12 h-12 md:w-16 md:h-16' src={author_img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{author}</h4>
                        <p className='text-[#11111199] font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-[#11111199] text-lg flex items-center gap-2 font-medium'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}>
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold my-4'>{title}</h2>
            
            <p className='text-[#11111199] font-medium'>
                {
                    hashtags.map((hashtag, index) => <span className='mr-3' key={index}>
                        <a className='hover:underline' href="">#{hashtag}</a>
                    </span>)
                }
            </p>
            <button className='text-[#6047EC] font-semibold text-lg mt-5 hover:underline'>Mark as read</button>
            <hr className='my-9 border' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;
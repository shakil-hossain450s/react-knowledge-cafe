import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className=''>
            <div className='mb-8 border rounded'>
                <img className='rounded w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16' src={author_img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{author}</h4>
                        <p className='text-[#11111199] font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-[#11111199] text-lg flex items-center gap-2 font-medium'>
                    <span>{reading_time} min read</span>
                    <button><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-4'>{title}</h2>
            
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
    blog: PropTypes.object.isRequired
}

export default Blog;
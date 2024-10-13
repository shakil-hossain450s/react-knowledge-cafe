import PropTypes from 'prop-types';

const ReadingTime = ({ readingTime }) => {
    return (
        <div className="bg-[#6047EC19] mb-6 p-5 rounded">
            <h2
                className="text-2xl font-bold text-[#6047EC] text-center">
                Spent time on read : {readingTime} min
            </h2>
        </div>
    );
};

ReadingTime.propTypes = {
    readingTime: PropTypes.number.isRequired
};

export default ReadingTime;
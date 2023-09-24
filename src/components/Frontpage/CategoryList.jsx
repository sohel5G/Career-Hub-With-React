import PropTypes from 'prop-types';

const CategoryList = ({ img, alt, title, subTitle }) => {
    return (
        <div className="p-6 bg-blue-50">
            <img src={img} alt={alt} />
            <h3 className="text-lg font-bold py-4"> {title} </h3>
            <p> {subTitle} </p>
        </div>
    );
};

export default CategoryList;

CategoryList.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}


import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

const Cetegory = ({categorys}) => {
    const {category,category_id} = categorys;
    return (
        <div className="">
            <NavLink
            // onClick={() => hadnleCategory(category_id)}
             className={({ isActive, isPending }) =>
             isPending ? "pending text-lg btn" : isActive ? "active text-lg btn" : "text-lg btn"
           }
            to={`/category/${category_id}`}>{category}</NavLink>
        </div>
    );
};

Cetegory.propTypes = {
    categorys: PropTypes.object.isRequired,
    category: PropTypes.string,
    category_id: PropTypes.number
}

export default Cetegory;
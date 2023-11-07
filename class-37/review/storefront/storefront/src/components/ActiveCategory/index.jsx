import { When } from 'react-if';
import { useSelector } from 'react-redux';

function ActiveCategory() {

    const { activeCategory } = useSelector((state) => state.categories);
    // console.log(activeCategory)


    return (
        <>
            <When condition={activeCategory}>
                <h2 key={activeCategory.name}>{activeCategory.name}</h2>
                <h4 data-testid="activeCategory-h4">{activeCategory.description}</h4>
            </When>
        </>
    )
}

export default ActiveCategory;
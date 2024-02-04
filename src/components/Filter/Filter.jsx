import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue} from '../../redux/contacts/contactsSlice';
import css from './Filter.module.css';
import { selectStatusFilter } from '../../redux/selectors';



export const Filter = () => {
 const filter = useSelector(selectStatusFilter)
 const dispatch = useDispatch()

 const handleChange = event => {
  dispatch(getFilterValue(event.target.value))
};

  return (
    <div className={css.filterList}>
      <label htmlFor="name">Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        onChange={event => handleChange(event)}
        value={filter}
        required
      />
    </div>
  );
};

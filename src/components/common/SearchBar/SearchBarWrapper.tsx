import { SearchBar } from './SearchBarWrapper.styles'
import SearchIcon from '@mui/icons-material/Search';

const SearchBarWrapper = (props: any) => {
  const { title } = props;
  return (
    <SearchBar>
      <div className="searchIcon">
        <SearchIcon style={{ color: 'white' }} />
      </div>
      <input
        className="search-input"
        placeholder={title}
      />
    </SearchBar>
  )
}

export default SearchBarWrapper
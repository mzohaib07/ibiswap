import metamaskimg from '../assets/metamask.png';
import coinbaseimg from '../assets/coinbase-logo.png';
import walletconnectimg from '../assets/walletconnect.png';
import formnaticimg from '../assets/formnatic.png';
import HiveIcon from '@mui/icons-material/Hive';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AppsIcon from '@mui/icons-material/Apps';
import DnsIcon from '@mui/icons-material/Dns';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';


export const OPENDRAWER = 'OPENDRAWER'
export const ACTIVENAV = 'ACTIVENAV'
export const CardTile = [
    {
        img: 'https://lh3.googleusercontent.com/PSHKxSMSaOZGiEfUuG8aOOGrtG3H5jpwIaZyYoCkutidCq4-jdifdFANNsWNJkOe2YlkSdD4g0J5OsLTptLUahV-VFevnNB4DPQB=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    },
    {
        img: 'https://lh3.googleusercontent.com/BbJRW4zVCteV4n21A_EyeIwQoensudgqZbkQMaRh2eEwT6sJjzf_2REHEvhkWSwkloHSI_VafMixQaO2wn9hPcSDAugG0n32UUrmpyg=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    },
    {
        img: 'https://lh3.googleusercontent.com/PSHKxSMSaOZGiEfUuG8aOOGrtG3H5jpwIaZyYoCkutidCq4-jdifdFANNsWNJkOe2YlkSdD4g0J5OsLTptLUahV-VFevnNB4DPQB=w600',
        title: 'Tulipa Nodatus',
        desp: 'Like many flowers, Tulipa Nodatus is monoecious, meaning that it has both male and female reproductive organs in the same individual'
    }
]

export const marketplace = [
    { name: "ALL NFT's" },
    { name: "Art" },
    { name: "Collections" },
    { name: "Collectibles" },
    { name: "Domain Name" },
    { name: "Music" },
    { name: "Photograps" },
    { name: "Sports" },
    { name: "Trading Cards" },
    { name: "Utility" },
    { name: "Virtual Words" },
]

export const myaccount = [
    { name: 'Profile' },
    { name: 'Favorites' },
    { name: 'Watchlist' },
    { name: 'My collections' },
    { name: 'Settings' },
    { name: '' },
]

export const stats = [
    { name: 'Rankings' },
    { name: 'Activity' },
]

export const resources = [
    { name: 'Help Center' },
    { name: 'Platform Status' },
    { name: 'Partners' },
    { name: 'Gas-Free Marketplace' },
    { name: 'Taxes' },
    { name: 'Blogs' },
    { name: 'Docs' },
    { name: 'Newsletter' },
];

export const company = [
    { name: 'About' },
    { name: 'Careers' },
    { name: 'Ventures' },
    { name: 'Grants' },
]

export const wallets = [
    {
        name: 'MetaMask',
        img: metamaskimg
    },
    {
        name: 'CoinBase Wallet',
        img: coinbaseimg
    },
    {
        name: 'WalletConnect',
        img: walletconnectimg
    },
    {
        name: 'Fortmatic',
        img: formnaticimg,
    },
]

export const explore = [
    {
        icon: <HiveIcon />,
        name: 'ALL NFT'
    },
    {
        icon: <BubbleChartIcon />,
        name: 'Art'
    },
    {
        icon: <AppsIcon />,
        name: 'Collectibles'
    },
    {
        icon: <DnsIcon />,
        name: 'Domain Name'
    },
    {
        icon: <MusicNoteIcon />,
        name: 'Music'
    },
    {
        icon: <AddAPhotoIcon />,
        name: 'Photography'
    },
    {
        icon: <SportsKabaddiIcon />,
        name: 'Sports'
    }
]

export const FIRSTSELECT = [
    { name: 'Last 7 days' },
    { name: 'Last 30 days' },
    { name: 'Last 24 hours' },
    { name: 'all time' },
]

export const CHAINS = [
    { name: 'All Chains' },
    { name: 'Etherum' },
    { name: 'Polygon' },
    { name: 'Klaytn' },
]



export const COLUMNS = [
    { field: 'collection', headerName: 'Collection', },
    { field: 'volume', headerName: 'Volume', },
    { field: '24h', headerName: '24h %', },
    {
        field: '7d',
        headerName: '7d %',
    },
    {
        field: 'floorprice',
        headerName: 'Floor Price',
    },
    {
        field: 'owner',
        headerName: 'Owner',
    },
    {
        field: 'items',
        headerName: 'Items',
    },
];

export function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    curb: number,
    fats: number
) {
    return { name, calories, fat, carbs, protein, curb, fats };
}

export const ROWS = [
    createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43),
    createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43), createData('1 Frozen yoghurt', 159, 6.0, 24, 4.0, 23, 43),
    createData('2 Ice cream sandwich', 237, 9.0, 37, 4.3, 23, 43),
    createData('3 Eclair', 262, 16.0, 24, 6.0, 23, 43),
    createData('4 Cupcake', 305, 3.7, 67, 4.3, 23, 43),
    createData('5 Gingerbread', 356, 16.0, 49, 3.9, 23, 43),
];
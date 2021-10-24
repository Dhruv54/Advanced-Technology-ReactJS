import Cards from './Cards';

export const Home = (props) => {
    const {showAlert,mode}=props
    return (
        <div> 
            <Cards showAlert={showAlert}  mode={mode}/>
        </div>
    )
}


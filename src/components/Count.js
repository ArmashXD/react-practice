function Count(props)
{
    function counter()
    {
        props.onCount();
    }
    
    return <div className="block">
            <button onClick={counter} className={props.background}>Click</button>
        </div>;
}

export default Count;
function Count(props)
{
    function counter()
    {
        props.onCount();
    }
    
    return <button
    className={props.background}
    onClick={counter}
    >
     Click
    </button>;
}

export default Count;
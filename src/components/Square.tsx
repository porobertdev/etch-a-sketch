const Square = ({ index, mouseOverHandler, colored }) => {
    return (
        <div
            key={`square-${index}`}
            className={`square border-[1px] border-solid border-black w-full ${colored && 'bg-red-500'}`}
            onMouseOver={mouseOverHandler}
        ></div>
    );
};

export default Square;

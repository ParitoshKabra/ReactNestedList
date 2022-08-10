import React from 'react'


const getChildren = (obj) => {
    if (Object.keys(obj).length === 1) return null;
    return obj[Object.keys(obj)[1]];
}

const getComponent = (obj) => {
    let name = obj.name;
    return <List name={name} children={getChildren(obj)} key={name} />
}

function List(props) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }} key={props.name}>
            <div onClick={handleClick}>
                {props.name}
            </div>
            {props.children &&
                <div style={{ display: !open ? 'none' : 'flex', flexDirection: 'column' }}>
                    {props.children.map((elem) => getComponent(elem))}
                </div>
            }
        </div >

    );
}

function NestedList(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.states.map(elem => {
                return getComponent(elem);
            })}
        </div>
    )
}

export default NestedList
export interface Props {
    text: string;
}


const AutoHeader = (props: Props) => {
    const { text } = props;
    return (
        <div>{text}</div>
    )
}

export default AutoHeader;
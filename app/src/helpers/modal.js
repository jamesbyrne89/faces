export const modalHandler = (openState, content) => {
    this.setState({
        modal: {
            open: openState,
            content: content
        }
    });
}
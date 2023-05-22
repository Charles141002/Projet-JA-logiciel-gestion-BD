function Information (props) {
    console.log(props.name, props.value);
    return(
        <div class="bloc_info">
            <h3>{props.name}  </h3>
            <p class="info">{props.value}</p>
        </div>
    );
}

export default Information
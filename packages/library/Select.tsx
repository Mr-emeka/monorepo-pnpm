export function CustomSelect(props: any) {  
    return <select onChange={(e) => props.onChange(e)}>{props.children}</select>;  
  }
  export default CustomSelect;
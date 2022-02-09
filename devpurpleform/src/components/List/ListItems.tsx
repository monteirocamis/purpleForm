export type ListItemProps = {
    id:string;
    task:string;
    isDone:number;
}

export const ListItems: React.FC<ListItemProps> = ({ id, task, isDone}) =>{

    return (
        <div>
           <p>{task} </p> 
        </div>
    )


}

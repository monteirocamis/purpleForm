import { ListItems , ListItemProps } from "./ListItems"

type ListProps = {
    itens : ListItemProps[]
}

export const List: React.FC<ListProps> = ({ itens}) => {

    return (
        <div>
            {itens.map((item, index) => (
                <ListItems key={index} {...item} />
            ))}
        </div>
    )

}
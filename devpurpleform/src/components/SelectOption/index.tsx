import * as C from './styles';

type Props = {
    title: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, icon, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
           </C.Info>
        </C.Container>
    );
}
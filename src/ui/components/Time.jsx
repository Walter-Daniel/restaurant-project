import { Typography} from 'antd';
const { Text } = Typography;

export const Time = () => {
    
  const date =  new Date();
  const hour = date.getHours();
  
    if( hour > 12 ) {
        return <Text> Buenas Tardes:</Text>
    }else if( hour > 21 ) {
        return <Text> Buenas Noches:</Text>
    }else {
        return <Text> Buenos Días:</Text>
    }

}

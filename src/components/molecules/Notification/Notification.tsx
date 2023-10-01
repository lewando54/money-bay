import { View, Text } from 'react-native'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import notificationStyle from './Notification.style'
import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import globalThemeStyle, { BODY_TEXT_COLOR, GOOD_GREEN, LINK_COLOR, MAIN_DARK, WARNING_YELLOW } from '../../../styling/GlobalTheme.style';

type TNotificationType = 'warning' | 'error' | 'correct'

interface INotificationProps {
    type: TNotificationType
    title: string
    body: string
    datetime: Date
}

export default function Notification({
    type='correct',
    title='Your loan application has been approved!',
    body='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date=new Date('2022-09-12T12:32:12')
}: INotificationProps){
    const notificationTypeIcon = 
        type == 'correct' ? 
            <CircleWithIcon backgroundColor={GOOD_GREEN} size={18} icon={<MaterialIcons name="check" size={10} color="white" />}/> :
        type == 'error' ?
            <CircleWithIcon backgroundColor={LINK_COLOR} size={18} icon={<MaterialIcons name="close" size={10} color="white" />}/> :
        type == 'warning' &&
            <CircleWithIcon backgroundColor={WARNING_YELLOW} size={18} icon={<AntDesign name="warning" size={10} color="white" />}/>

    return (
        <UniversalContainer padding={22} style={{gap: 12}}>
            <View style={{flexDirection: 'row', gap: 8, alignItems: 'flex-start'}}>
                {notificationTypeIcon}
                <View style={{alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', flexShrink: 1, marginTop: -3}}>
                    <Text style={[globalThemeStyle.text_SemiBold, { fontSize: 16, color: MAIN_DARK }]}>{title}</Text>
                </View>
            </View>
            <Text style={[globalThemeStyle.text_Regular, { fontSize: 16, color: MAIN_DARK }]}>{body}</Text>
            <View style={{backgroundColor: '#CED6E1', width: '100%', height: 1}}></View>
            <Text style={[globalThemeStyle.text_Regular, { fontSize: 12, color: BODY_TEXT_COLOR }]}>{date.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'})} at {date.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})}</Text>
        </UniversalContainer>
    )
}

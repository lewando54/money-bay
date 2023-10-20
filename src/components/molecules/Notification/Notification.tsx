import React from 'react'
import { View, Text } from 'react-native'
import UniversalContainer from '../../atoms/UniversalContainer/UniversalContainer'
import notificationStyle from './Notification.style'
import CircleWithIcon from '../../atoms/CircleWithIcon/CircleWithIcon'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons' 
import { GOOD_GREEN, LINK_COLOR, WARNING_YELLOW } from '../../../styling/GlobalTheme.style'
import Separator from '../../atoms/Separator/Separator'

type TNotificationType = 'warning' | 'error' | 'correct'

interface INotificationProps {
    type?: TNotificationType
    title?: string
    body?: string
    datetime?: Date
    testID?: string
}

export default function Notification({
    type='correct',
    title='Your loan application has been approved!',
    body='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    datetime=new Date('2022-09-12T12:32:12'),
    testID
}: INotificationProps){
    const notificationTypeIcon = 
        type == 'correct' ? 
            <CircleWithIcon backgroundColor={GOOD_GREEN} size={18} icon={<MaterialIcons name="check" size={10} color="white" />}/> :
            type == 'error' ?
                <CircleWithIcon backgroundColor={LINK_COLOR} size={18} icon={<MaterialIcons name="close" size={10} color="white" />}/> :
                type == 'warning' &&
            <CircleWithIcon backgroundColor={WARNING_YELLOW} size={18} icon={<AntDesign name="warning" size={10} color="white" />}/>

    return (
        <UniversalContainer padding={22} style={{gap: 12}} testID={testID}>
            <View style={notificationStyle.iconAndTitleWrapper}>
                {notificationTypeIcon}
                <View style={notificationStyle.titleWrapper}>
                    <Text style={notificationStyle.notificationTitleText}>{title}</Text>
                </View>
            </View>
            <Text style={notificationStyle.notificationBodyText}>{body}</Text>
            <Separator />
            <Text style={notificationStyle.notificationTimeText}>{datetime.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'})} at {datetime.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})}</Text>
        </UniversalContainer>
    )
}

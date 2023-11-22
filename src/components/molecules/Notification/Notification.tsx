import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons' 

import { CustomText } from '@atoms'
import { CircleWithIcon, Separator, UniversalContainer } from '@atoms'

import notificationStyle from './Notification.style'

import { globalColors } from '@styling/GlobalTheme.style'

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
            <CircleWithIcon backgroundColor={globalColors.GOOD_GREEN} size={18} icon={<MaterialIcons name="check" size={10} color="white" />}/> :
            type == 'error' ?
                <CircleWithIcon backgroundColor={globalColors.LINK_COLOR} size={18} icon={<MaterialIcons name="close" size={10} color="white" />}/> :
                type == 'warning' &&
            <CircleWithIcon backgroundColor={globalColors.WARNING_YELLOW} size={18} icon={<AntDesign name="warning" size={10} color="white" />}/>

    return (
        <UniversalContainer padding={22} style={{gap: 12}} testID={testID}>
            <View style={notificationStyle.iconAndTitleWrapper}>
                {notificationTypeIcon}
                <View style={notificationStyle.titleWrapper}>
                    <CustomText style={notificationStyle.notificationTitleText}>{title}</CustomText>
                </View>
            </View>
            <CustomText style={notificationStyle.notificationBodyText}>{body}</CustomText>
            <Separator />
            <CustomText style={notificationStyle.notificationTimeText}>{datetime.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})} at {datetime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'})}</CustomText>
        </UniversalContainer>
    )
}

import { ImageSourcePropType , View} from 'react-native'
import { Image} from 'expo-image'

type Props = {
  stickerSource : ImageSourcePropType
  imageSize : number
}

export default function EmojiSticker({ stickerSource, imageSize }: Props) {
  return (
    <View style = {{top : -350}}>
      <Image source={stickerSource} style={{width: imageSize , height : imageSize}} />
    </View>
  )

}

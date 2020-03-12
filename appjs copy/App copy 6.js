import Animated from "react-native-reanimated"

// 没案
// Animate.ViewのTouchable  + Image  + プレスイベント
// しかし，うまくプレスイベントを扱う方法があるか不明で見つからない
<TouchableOpacity onPress={this.startAnimation}>
  <Animated.View style={{
    transform: [
      {
        translateY: this.state.animY
      }
    ],
    height: 250,
    width: 200,
    margin: 5,
    borderRadius: 40,
    backgroundColor: "black",
  }} >
    <Image
      source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png', width: 60, height: 60 }}
    />
    <Image
      source={{ uri: 'https://img.icons8.com/office/70/000000/pixar-lamp.png' }}
      style={{ width: 60, height: 60 }}
    />
    <Animated.Image
      style={{ width: 60, height: 60, transform: [{ translateX: this.state.animY }] }}
      source={{ uri: 'https://img.icons8.com/color/70/000000/wolverine.png' }} />
  </Animated.View>
</TouchableOpacity>
          </View >

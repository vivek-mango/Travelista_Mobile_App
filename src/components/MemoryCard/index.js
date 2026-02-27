import {Text, View} from 'react-native';

const MemoryCard = ({Item}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
        margin: 4,
        padding: 8,
        flex: 1,
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Item.avatar />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 14,
                fontFamily: 'Inter',
                color: 'black',
              }}>
              {Item.name}
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 10,
                fontFamily: 'Inter',
                color: '#8FA198',
              }}>
              {Item.day}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 12,
              fontFamily: 'Inter',
              color: '#8FA198',
              marginTop: 8,
            }}>
            {Item.Title}
          </Text>
          <Item.image width={130} />
        </View>
      </View>
    </View>
  );
};
export default MemoryCard;

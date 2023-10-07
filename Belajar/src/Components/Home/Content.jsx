/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Content = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Tentang Kami</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut non
        quia reiciendis nemo asperiores, repudiandae corrupti aliquam aliquid
        facere ea officia corporis similique suscipit, eius praesentium autem
        necessitatibus laborum alias illo consequuntur recusandae amet. Minima
        architecto maiores quidem. Neque atque deleniti quidem qui, iure
        voluptas maxime reprehenderit ipsam numquam ipsa nemo excepturi nihil
        porro sed debitis ipsum culpa impedit. Consequatur impedit fuga ipsa
        beatae voluptatem, magni vero, quas est nam maiores commodi,
        perspiciatis eos. Suscipit minima doloribus amet dolorem quae rem
        recusandae temporibus adipisci, culpa tenetur tempora dolore deleniti
        est debitis eos, explicabo eveniet repudiandae cumque autem accusamus
        rerum. Exercitationem ipsa vel deserunt officiis assumenda facere illo
        maxime, eius consectetur dignissimos neque animi blanditiis temporibus
        nihil suscipit! Quos placeat animi deleniti sapiente cumque illum, fugit
        doloremque. Sed architecto magnam rerum iure fuga amet cupiditate ipsa
        est assumenda asperiores, nobis sequi hic voluptatem quos repellendus
        provident atque possimus delectus, ratione aperiam, animi quis quidem
        vero! Aperiam commodi et quia quasi, deleniti consectetur laborum
        voluptatum assumenda, cumque eos aliquid omnis recusandae maiores
        facilis explicabo iusto harum eaque nobis sed quod. Reiciendis
        cupiditate dolorum veritatis iure quibusdam ipsum fugit delectus quae
        facere, eligendi voluptates perspiciatis at facilis, eveniet deleniti
        hic, est voluptatibus.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    marginHorizontal: 15,
    textAlign: 'justify',
  },
});

export default Content;

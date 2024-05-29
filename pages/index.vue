<template>
  <div>
    <Cover />
    <div class="wrap-container">
      <main class="content">
        <div class="content__inner">
          <Card v-for="card in cards" :card="card" />
        </div>
      </main>
    </div>
    <div class="wrap-container"><CallBack /></div>
  </div>
</template>

<script lang="ts" setup>
const cards = [
  {
    img: {
      src: 'dvxgames.svg',
      height: '85',
    },
    desc: 'DVX Games was established in 2021. Our focus is on creating app concepts under the DVX Games brand that are designed to provide enjoyable experiences for mobile gamers.',
    link: 'dvxgames.net',
  },
  {
    img: {
      src: 'adlink.svg',
      height: '35',
    },
    desc: 'Place your advertising in the Adlink Network today. Adlink uses the most modern AI technologies for a comprehensive solution to customer tasks. Attention-grabbing advertising - at the right time - in the right place. ',
    link: 'adlink.net',
  },
  {
    img: {
      src: 'metarocks.svg',
      height: '48',
    },
    desc: 'Own your unique NFT on the <b color="blue">Ethereum</b> Blockchain. Each NFT is unique and no two are exactly alike and have a variety of outfits, faces and colors. Your new NFT will be in your wallet within a few seconds.',
    link: 'metarocks.io',
  },
  {
    img: {
      src: 'metacharts.svg',
      height: '48',
    },
    desc: 'Own your unique NFT on the <b color="red">Solana</b> Blockchain. Each NFT is unique and no two are exactly alike and have a variety of outfits, faces and colors. Your new NFT will be in your wallet within a few seconds.',
    link: 'metacharts.io',
  },
  {
    img: {
      src: 'romance.svg',
      height: '38',
    },
    desc: 'Romance is a social network for discerning singles who are looking for a long-term relationship. Members can communicate with each other and share digital content such as texts, pictures, links or videos.',
    link: 'romance.de',
  },
  {
    img: {
      src: 'chouko.svg',
      height: '54',
    },
    desc: 'Chouko is an anime brand that creates stories blending the physical and digital worlds. Our projects challenge the traditional boundaries of storytelling. Here are some of our key creations so far.',
    link: 'chouko.com',
  },
  {
    img: {
      src: 'partygames.svg',
      height: '80',
    },
    desc: 'Elevate your party to the next level! Amp up the night with fun party games to lift the spirits. Party games are the perfect addition to your evening, guaranteeing lots of fun and laughter.',
    link: 'partygames.de',
  },
  {
    img: {
      src: 'flaschendrehen.svg',
      height: '80',
    },
    desc: 'Did you know that Spin the Bottle is not just a party game that reveals secrets and leads to daring challenges, but can also uncover a lot about a person? It can become erotic and sensuous!',
    link: 'flaschendrehen.de',
  },
  {
    img: {
      src: 'mates.svg',
      height: '54',
    },
    desc: 'Experience the thrill of owning your very own Virtual Mate on the <b color="blue">Ethereum</b> Blockchain! Each Virtual Mate is a unique masterpiece. Within seconds, your new Virtual Mate will be securely in your wallet.',
    link: 'mates.info',
  },
];
</script>

<style lang="scss">
.content {
  margin-top: 42px;
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    @media (max-width: 1280px) {
      gap: 25px;
    }
    @media (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 685px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>

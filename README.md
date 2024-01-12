# Climate Fresk Cards

Ce projet a pour objectif de faciliter la traduction des cartes de la Fresque du Climat.
Il est basé sur le framework [RevealJS](https://revealjs.com/).

## Project setup

Clone the repository
```
git clone https://github.com/fresqueduclimat/cards
```

Initialize the project

```
npm install
```

Compiles and hot-reloads for development

```
npm run serve
```

Export cards in pdf file

```
EXPORT_LANG=FR_FR npm run export
```
Le paramètre "EXPORT_LANG" permet de nommer automatiquement le fichier (par exemple, avec la commande ci-dessous le fichier exporté sera `Adults-FR_FR-v8.4.pdf`). Attention cependant, la langue du pdf exporté dépend de la locale choisie dans le fichier `main.js` (cf. Choix de la langue ci-dessous)

Export cards in png (for online mural facilitation)

```
npm run capture
```
La commande est configurée pour exporter en png uniquement les recto de chaque carte. Ceci peut être adapté via package.json pour adapter la commande au besoin, ou en créer une nouvelle.
Il faut qu'un dossier /screenshots existe à la racine, les pngs sont directement téléchargés dans le dossier.

## Project details

### Fonctionnement global

Le fond des cartes est importé à partir de fichiers png.

Sur chaque fond de carte sont positionnées des `div` contenant dans des paragraphes `p` les textes à traduire.
Une fonction d'ajustement automatique garantit que le texte contenu dans le `p` ne dépasse pas la taille prévue de la `div`.

Pour aider à la visualisation, les `div` sont entourées d'une bordure rouge, qu'il faut retirer avant l'export final.

### Choix de la langue

Des fichiers json contiennent l'ensemble des textes présents sur les cartes, dans chaque langue dans laquelle on souhaite traduire le jeu. On peut choisir la langue dans laquelle exporter les cartes en modifiant la constante `locale` dans le fichier `main.js`.
```
const messages = {
  en: en,
  fr: fr,
  ar: ar,
  br: br,
  de: de,
  jp: jp,
  cn: cn,
};

const i18n = createI18n({
  locale: "fr", // Set the initial locale, e.g., 'en'
  fallbackLocale: "fr",
  messages,
});
```

### Composants

Le composant `CardBase` spécifie une carte simple, avec uniquement un titre sur le recto et un texte sur le verso. Il possède les propriétés suivantes.
```
props: {
        backgroundFrontImage: {
            type: String,
            required: true,
        },
        backgroundBackImage: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
```
Chaque composant spécifique `CardOne`, `CardTwo`, `CardThree`, `CardFour` ... est une instance du composant `CardBase` avec les paramètres correspondants à la carte.
Par exemple pour le composant `CardFive` :

```
<CardBase :title="$t('V1C5L1')" :content="$t('V1C5L2')" :card-number="5" :background-front-image="`C5.png'"
        :background-back-image="`C5-back.png'">
```
Pour les cartes avec du texte supplémentaire, il faut ajouter dans le composant spécifique les `div` et `p` correspondant à chaque texte.
Par exemple pour le composant `CardFive` :

```
<div id="card5-label1" class="horizontal-center vertical-center label black card5-label1-position">
    <p id="card5-text1" class="font-small">{{ $t('V1C5L5') }}</p>
</div>
<div id="card5-label2" class="horizontal-center vertical-center label black card5-label2-position">
    <p id="card5-text2" class="font-medium">{{ $t('V1C5L3') }}</p>
</div>
<div id="card5-label3"
    class="horizontal-center vertical-center label black label5 vertical-text card5-label3-position">
    <p id="card5-text3" class="font-small">{{ $t('V1C5L4') }}</p>
</div>
<div id="card5-label4"
    class="horizontal-center vertical-center label black label5 vertical-text card5-label4-position">
    <p id="card5-text4" class="font-small">{{ $t('V1C999L90') }}</p>
</div>
```


Il faut positionner et déterminer une taille pour chacune de ces divs selon la position et la place du texte qu'elle contient.
Par exemple pour le premier texte de la carte 5 :
```
.card5-label1-position {
    top: calc(954px * var(--scale-factor));
    left: calc(1216.8px * var(--scale-factor));
    width: calc(1357.2px * var(--scale-factor));
    height: calc(254.4px * var(--scale-factor));
}
```

Les `div` et `p` possèdent des `ids` avec des règles de nommage définies comme ci-dessous :
```
card1-label0
card2-label0
card2-back-label0
card1-back-label0
card3-label0
card3-back-label0
card4-label0
card4-back-label0
card5-label0
card5-back-label0"
card5-label1
card5-label2"
card5-label3
card5-label4
ect.
```
Ces `ids` permettent le bon fonctionnement de la fonction d'ajustement automatique.


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

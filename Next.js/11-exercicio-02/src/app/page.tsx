import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="title">O Fascinante Planeta Saturno</h1>
      <Image
        src="/image (2).png"
        width={400}
        height={200}
        alt="Imagem de saturno"
      />
      <p className="paragraph">
        Saturno é o sexto planeta a partir do Sol e é conhecido pelos seus
        impressionantes anéis. Ele é o segundo maior planeta do Sistema Solar,
        depois de Júpiter. A composição principal de Saturno é gás, o que o
        torna um gigante gasoso.
      </p>

      <h2 className="subtitle">Características Físicas</h2>
      <p className="paragraph">
        Saturno possui uma atmosfera composta predominantemente por hidrogênio e
        hélio. O planeta tem uma densidade extremamente baixa, o que significa
        que, se fosse possível colocá-lo em uma imensa banheira, ele flutuaria.
      </p>

      <h2 className="subtitle">Os Anéis de Saturno</h2>
      <p className="paragraph">
        Uma das características mais marcantes de Saturno são seus anéis. Eles
        são feitos de pedaços de gelo, rocha e poeira que orbitam o planeta.
        Embora pareçam sólidos, são formados por partículas que variam em
        tamanho, de pequenos grãos de poeira até rochas de vários metros.
      </p>
      <Image
        src="/Image.png"
        width={400}
        height={200}
        alt="Imagem de saturno"
      />

      <h2 className="subtitle">Satélites Naturais</h2>
      <p className="paragraph">
        Saturno possui mais de 80 luas confirmadas, sendo Titã a maior e uma das
        mais interessantes, por possuir uma atmosfera densa e mares de metano
        líquido. Luas como Encélado e Europa também despertam grande interesse
        científico devido a possíveis oceanos subterrâneos.
      </p>
      <Image
        src="/Image (1).png"
        width={400}
        height={200}
        alt="Imagem de saturno"
      />

      <p className="paragraph">
        <strong>Publicado em: </strong>Outubro de 2024
      </p>
    </main>
  );
}

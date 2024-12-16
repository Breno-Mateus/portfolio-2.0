import Dev from "../../../assets/undraw_online_transactions_-02-ka.svg";

const Home = () => {
    return (
        <section className="bg-colorPrimary flex justify-between items-center py-16 px-[10%] gap-20 h-screen">
            <div className="w-[38%]">
                <h3 className="text-[2rem] font-extrabold text-colorStyle">&lt; Desenvolvedor Frontend &gt;</h3>
                <p className="leading-tight text-base font-light">Sou apaixonado por desenvolver interfaces web modernas e escaláveis, criando experiências interativas e funcionais que colocam o usuário no centro!</p>
                <br/>

                <button className="bg-colorStyle py-1 px-2 rounded-md hover:opacity-85 font-medium">Download CV</button>
            </div>

            <img src={Dev} className="w-[50%] h-[50%]"/>
        </section>
    )
};

export default Home;
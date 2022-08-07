import React from 'react';


const SuspentionRepair = () => {
    return (
        <div className="suspention-repair section-item">
            <div className="section-item-left">
               <h2>Ремонт ходовой части</h2> 
            </div>
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className='item-right-h'>Уважаемые клиенты!<br /> <span className='span-item-right'>ATV-Авто "Пулково"</span> предлагает услуги квалифицированных мастеров
                        в области ремонта и обслуживания ходовой части вашего авто по следующим видам работ:</p>
                    <ul className='item-right-list'>
                        <li> Комплексная диагностика ходовой части</li>
                        <li> Замена пружин</li>
                        <li> Замена шаровых опор</li>
                        <li> Замена ступичных подшипников</li>
                        <li> Замена пыльников</li>
                        <li> Замена сайлентблоков и втулок</li>
                        <li> Диагностика, обслуживание и замена пневмо, гидро амортизаторов </li>
                        <li> Замена амортизаторов, опор, подшипников, пыльников и отбойников</li>
                    </ul>
                </div>
                <p className='item-right-h'>
                    Стоимость комплексной диагностики ходовой части: <span className='span-item-right'>500 рублей</span><br />
                    Все работы выполняются с использованием современного оборудования.</p>
            </div>
        </div>
    );
};

export default SuspentionRepair;
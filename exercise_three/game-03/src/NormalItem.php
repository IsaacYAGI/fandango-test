<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 18:27
 */

namespace App;


class NormalItem extends Item
{
    public function updateData()
    {
        //Disminuye dias para comprar
        $this->decreaseSellIn();

        //Si ya paso la fecha tope para vender
        if ($this->getSellIn() < 0){
            //La calidad baja x 2
            $this->decreaseQuality(2);
        }else{
            //Sino baja x 1
            $this->decreaseQuality(1);
        }
    }
}
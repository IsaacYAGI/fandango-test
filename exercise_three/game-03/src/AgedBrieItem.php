<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 18:39
 */

namespace App;


class AgedBrieItem extends Item
{
    public function updateData()
    {
        $this->decreaseSellIn();

        //Si ya paso la fecha tope para vender
        if ($this->getSellIn() < 0){
            //La calidad sube x 2
            $this->increaseQuality(2);
        }else{
            //Sino sube x 1
            $this->increaseQuality(1);
        }
    }
}
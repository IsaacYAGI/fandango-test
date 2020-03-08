<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 18:41
 */

namespace App;


class ConjuredItem extends Item
{
    public function updateData()
    {
        $this->decreaseSellIn();
        $this->decreaseQuality(1);
    }
}
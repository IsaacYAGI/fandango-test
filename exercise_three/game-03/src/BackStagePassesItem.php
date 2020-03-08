<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 18:40
 */

namespace App;


class BackStagePassesItem extends Item
{
    public function updateData()
    {
        $this->decreaseSellIn();
        $this->decreaseQuality(1);
    }
}
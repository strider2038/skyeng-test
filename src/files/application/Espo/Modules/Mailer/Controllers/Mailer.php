<?php

namespace Espo\Modules\Mailer\Controllers;

class Mailer extends \Espo\Core\Controllers\Base
{
    public function actionSendEmail($params, $data, $request) {
        return ['success' => mail($data['email'], 'Привет для Skyeng!', 'Привет для Skyeng!')];
    }
}
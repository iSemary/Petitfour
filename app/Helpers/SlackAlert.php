<?php

namespace App\Helpers;

use App\Interfaces\ViewInterface;
use App\Interfaces\ContactSubjectInterface;
use App\Helpers\ApiHandler;

class SlackAlert {
    protected $webhookUrl;

    public function __construct() {
        $this->webhookUrl = env("SLACK_WEBHOOK_URL");
    }
    public function send(array $data, int $type) {
        if (!$this->webhookUrl) {
            return false;
        }
        $message = self::prepareMessage($data, $type);

        (new ApiHandler)->call('POST', $this->webhookUrl, [], ['text' => $message]);
    }

    private function prepareMessage(array $data, int $type): string {
        $message = '';
        switch ($type) {
            case 1:
                $message = 'There is a new view on website from ' . (isset(ViewInterface::type[$data['type']]) ? ViewInterface::type[$data['type']] : $data['type']);
                break;
            case 2:
                $message = "There is a new " . (isset(ContactSubjectInterface::type[$data['subject'] - 1]) ? ContactSubjectInterface::type[$data['subject'] - 1] : $data['subject']) . " message from {$data['name']} | {$data['email']} \n {$data['message']}";
                break;
            default:
                break;
        }

        return $message;
    }
}

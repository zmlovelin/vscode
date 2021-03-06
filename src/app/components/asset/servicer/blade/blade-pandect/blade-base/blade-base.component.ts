/**
 * Created by WH1711028 on  2017/11/20
 */

import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { BladeBaseService } from "./blade-base.service";
import { Blade } from "../../../../../../models/blade";

@Component({
    selector: 'app-blade-base',
    templateUrl: './blade-base.component.html',
    styleUrls: ['./blade-base.component.scss'],
    providers: [ BladeBaseService ]
})

export class BladeBaseComponent implements OnInit {
    serverId: string;
    baseInfo: Blade = new Blade();
    baseColumn = [
        { label: '资产名称', key: 'bladeServerName'},
        { label: '管理IP', key: 'manageIp'},

        { label: '型号', key: 'bladeServerModelId'},
        { label: '序列号', key: 'xlh'},
        { label: '资产编号', key: 'bladeServerCode'},

        { label: '所属项目', key: 'bladeServerProject'},
        { label: 'BIOS软件版本', key: 'biosrj'},
        { label: 'BIOS固件版本', key: 'biosgj'},

        { label: 'BMC软件版本', key: 'bmc'},
        { label: '第一责任人', key: 'firstPrincipalName'},
        { label: '第二责任人', key: 'secondPrincipalName'},
    ];

    shelfColumn = [
        { label: '所在机房', key: 'computerRoomName' },
        { label: '所在机柜', key: 'cabinetName' },
        { label: '所在U位', key: 'startU' }
    ];

    // baseInfo = {
    //     name: 'gyj',
    //     ip: '127.0.0.1',
    //     level: 3,
    //     xh: '什么型号',
    //     zcbh: '资产编号',
    //     ssxm: 'fiberhome',
    //     biosrj: 'sefsefsa',
    //     biosgj: 'sefasfeasef',
    //     bmc: 'ijnmkoplfe',
    //     dyzrr: '张三',
    //     dezrr: '李四'
    // };

    shelfInfo = {
        computerRoomId: '10086机房',
        szjg: '9636机柜',
        szuw: '23'
    };

    constructor(
        private $active: ActivatedRoute,
        private $service: BladeBaseService
    ) { }
    ngOnInit() {
        this.$active.queryParams.subscribe(params => {
            this.serverId = params.id;
            this.$service.getServerBaseInfo(this.serverId, result => {
                this.baseInfo = result;
                console.log('baseInfo', result);
            });
        });
    }
}



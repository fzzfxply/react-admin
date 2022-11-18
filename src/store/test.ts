import dayjs from "dayjs"
import { makeAutoObservable } from "mobx"

type RelatedEvidence = {
    statusId: number
    file?: File
    url?: string
}

export class IdChargeBackSalesManagementStore {
    franchiseStoreNumber = ""
    settlementMeans = ""
    transactionId = ""
    transactionClassification = ""
    transactionDateFrom = ""
    transactionDateTo = ""
    transactionTimeFrom = ""
    transactionTimeTo = ""
    terminalNo = ""
    saleApprovalDateFrom = ""
    saleApprovalDateTo = ""
    statusUpdateDateFrom = ""
    statusUpdateDateTo = ""
    chargebackStatus = ""
    chargebackStatusNumber = ""
    chargebackCode = ""
    cardNo = ""
    userId = ""
    clickDownloadButtonTime = ""
    twinkle = false
    downloadLoading = false

    updateReason = ""
    updatedDate = ""
    updatePerson = "ジャックス"
    chargebackUpdateStatus = ""
    merchantAmount = ""
    transactionAmount = ""
    acqAmount = ""
    editStatus = 0
    chargebackHistoryDetail = {} as any
    cardNoError = ""
    franchiseStoreNumberError = ""
    settlementMeansError = ""
    groupError = ""
    transactionIdError = ""
    transactionClassificationError = ""
    transactionStatusError = ""
    transactionDateFromError = ""
    transactionDateToError = ""
    saleDateFromError = ""
    saleDateToError = ""
    gwOperatorError = ""
    terminalNoError = ""
    saleApprovalDateFromError = ""
    saleApprovalDateToError = ""
    statusUpdateDateFromError = ""
    statusUpdateDateToError = ""
    transactionTimeFromError = ""
    transactionTimeToError = ""

    updateReasonError = ""
    relatedEvidenceError = ""
    updateDateError = ""
    merchantAmountError = ""

    license: File | undefined // 営業許可証
    relatedEvidence = <Array<RelatedEvidence>>[] // 関連証跡

    hasNextPage = false
    loading = false
    expand = true
    licenseLoading = false
    isUploadImgSuccess = false
    isUploadImgFail = false
    fetchLoading = false
    dialogOpenLoading = false
    updateLoading = false
    checkedNumber = -1
    page = 0
    count = 1
    pageSize = 10
    clickTime = ""
    // franchiseStorePdfInfo = {} as FranchiseStorePdfInfo
    acqAmountFlag = false
    searchParam = {
        pageSize: 0,
        pageToken: "",
        cardNo: "",
        franchiseNo: "",
        paymentMethodId: "",
        transactionId: "",
        transactionClassification: "",
        transactionDateFrom: "",
        transactionDateTo: "",
        transactionTimeFrom: "",
        transactionTimeTo: "",
        processingCompletionDateFrom: "",
        processingCompletionDateTo: "",
        updatedDateFrom: "",
        updatedDateTo: "",
        chargebackStatus: 0,
        chargebackCode: "",
        acqAmountFlag: false,
    }

    constructor() {
        makeAutoObservable(this)
    }

    get pageToken() {
        return String(this.page * this.pageSize)
    }

    get dateTime() {
        return {
            startDate: this.transactionDateFrom,
            endDate: this.transactionDateTo,
            startTime: this.transactionTimeFrom,
            endTime: this.transactionTimeTo,
        }
    }

    get saleApprovalDate() {
        return {
            startDate: this.saleApprovalDateFrom,
            endDate: this.saleApprovalDateTo,
        }
    }

    get statusUpdateDate() {
        return {
            startDate: this.statusUpdateDateFrom,
            endDate: this.statusUpdateDateTo,
        }
    }

    get evidence() {
        return this.relatedEvidence.find((item) => item.statusId === Number(this.chargebackUpdateStatus))
    }

    checkFile = (element: File) => {
        window.addEventListener("IMAGE_ERROR", () => {
            this.relatedEvidenceError = "message.default.error.fileFormat"
            return !this.relatedEvidenceError
        })
        if (element.size > 20971520) this.relatedEvidenceError = "message.default.error.fileSizePassMax"
        else this.relatedEvidenceError = ""
        return !this.relatedEvidenceError
    }

    setRelatedEvidence = (file: File | undefined) => {
        console.log(file)
        file && this.checkFile(file)
        this.initRelatedEvidence(
            this.relatedEvidence.map((element) => {
                return element.statusId !== Number(this.chargebackUpdateStatus)
                    ? element
                    : {
                        statusId: element.statusId,
                        file: file,
                    }
            }),
        )
    }

    setDownloadLoading = (value: boolean) => {
        this.downloadLoading = value
    }

    setUserId = (value: string) => {
        this.userId = value
    }

    setCheckedNumber = (index: number, flag?: boolean) => {
        this.checkedNumber === index ? (this.checkedNumber = -1) : (this.checkedNumber = index)
        flag && (this.checkedNumber = index)
    }

    setUpdateDate = (value: string | null) => {
        this.updatedDate = value || ""
    }

    setTransactionAmount = (value: string) => {
        this.transactionAmount = value
    }

    setAcqAmount = (value: string) => {
        this.acqAmount = value
    }

    setUpdatePerson = (value: string) => {
        this.updatePerson = value
    }

    setExpand = (value: boolean) => {
        this.expand = value
    }

    setChargebackUpdateStatus = (value: string) => {
        this.chargebackUpdateStatus = value
        this.relatedEvidenceError = ""
    }

    setSettlementMeans = (value: string) => {
        this.settlementMeans = value
    }

    setLoading = (value: boolean) => {
        this.loading = value
    }
    setChargebackHistoryDetail = (value: any) => {
        this.chargebackHistoryDetail = value
    }
    setHasNextPage = (value: boolean) => {
        this.hasNextPage = value
    }

    setCount = (value: number) => {
        this.count = value
    }

    setPage = (value: number) => {
        this.page = value
    }

    setPageSize = (value: number) => {
        this.pageSize = value
    }

    setClickTime = (value: string) => {
        this.clickTime = value
    }

    setChargebackStatusNumber = (value: string) => {
        this.chargebackStatusNumber = value
    }
    setChargebackStatus = (value: string) => {
        this.chargebackStatus = value
    }

    setChargebackCode = (value: string) => {
        this.chargebackCode = value
    }

    setFetchLoading = (value: boolean) => {
        this.fetchLoading = value
    }

    setDialogOpenLoading = (value: boolean) => {
        this.dialogOpenLoading = value
    }

    setUpdateLoading = (value: boolean) => {
        this.updateLoading = value
    }

    setClickDownloadButtonTime = (value: string) => {
        this.clickDownloadButtonTime = value
    }

    setTwinkle = (value: boolean) => {
        this.twinkle = value
    }

    opposite = (num: string) => {
        if (num === "0") return num
        return num.substring(0, 1) === "-" ? num.substring(1, num.length) : "-" + num
    }

    initRelatedEvidence = (value: Array<RelatedEvidence>) => {
        this.relatedEvidence = value
    }
    checkInvalid = () => {
        if (this.transactionDateFrom == "Invalid Date" || this.transactionTimeFrom == "Invalid Date") {
            this.transactionDateFrom = ""
            this.transactionTimeFrom = ""
            this.transactionDateFromError = ""
            this.transactionTimeFromError = ""
        } else if (this.transactionDateTo == "Invalid Date" || this.transactionTimeTo == "Invalid Date") {
            this.transactionDateTo = ""
            this.transactionTimeTo = ""
            this.transactionDateToError = ""
            this.transactionTimeToError = ""
        }
    }
}

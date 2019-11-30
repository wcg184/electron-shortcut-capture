declare namespace ElectronShortcutCapture {
	interface IRect {
		x1: number
		y1: number
		x2: number
		y2: number
	}

	interface IElectronShortcutCapture {
		show: () => void
	}

	interface IElectronShortcutCaptureProps {
		/**
		 * 允许多屏幕，默认false，只对当前操作的屏幕进行截图
		 * 使用多屏幕截图有可能导致打开截图变慢
		 */
		multiScreen?: boolean
		// 下载文件前缀
		downloadFileprefix?: string
	}

	interface ISource {
		width: number
		height: number
		toPngSource: any
	}

	interface ISettingProps {
		thicknessNum?: number
		color?: string
	}

	interface IBounds {
		height: number
		width: number
		x: number
		y: number
	}
}
